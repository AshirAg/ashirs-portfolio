import styles from './Button.module.css'
import { useNavigate } from 'react-router-dom';

function Button({
  children = "Button",
  className = "button_primary",
  icon = null,
  to = "",
  href = "",
  target = "",
  download = false,
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
      e.preventDefault();
      navigate(to);
    } else if (href) {
      if (download) {
        e.preventDefault();

        fetch(href)
        .then(res => res.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = typeof download === "string" ? download : "";
          document.body.appendChild(link);
          link.click();
          link.remove();
          window.URL.revokeObjectURL(url);
          window.open(href, '_blank', 'noopener,noreferrer');
        });

      } else if (target === "_blank") {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = href;
      }
    } else {
      if (onClick) onClick(e);
    }
  };

  return (
    <button 
      className={classList} 
      onClick={handleClick} 
      {...restProps} 
      type={restProps.type || 'button'}
    >
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}

export default Button;
