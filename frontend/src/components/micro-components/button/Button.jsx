import styles from './Button.module.css'
import { useNavigate } from 'react-router-dom';

function Button({
  children = "Button",
  className = "button_primary",
  icon = null,
  to = "",       // internal route path (React Router)
  href = "",     // external url
  target = "",   // target for external link
  onClick,
  ...restProps
}) {
  const classList = className
    .split(' ')
    .map(cls => styles[cls] || cls)
    .join(' ');

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to) {
      // Internal navigation via react-router
      e.preventDefault();
      navigate(to);
    } else if (href) {
      // External link navigation
      if (target === "_blank") {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = href;
      }
    } else {
      // Normal button click
      if (onClick) onClick(e);
    }
  };

  return (
    <button className={classList} onClick={handleClick} {...restProps} type={restProps.type || 'button'}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}

export default Button;
