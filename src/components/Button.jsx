

const Button = ({ text, className, id }) => {
    return (
        <a
        className={`${className ?? ""} cta-wrapper`} >
        <div className="cta-button group">
          <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper ml-2">
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div>
        </div>
      </a>
    );
  };
  
  export default Button;

