function Button(children: any, type: any = "button", onClick: any, disabled: any, className: any) {

   
    type variant = "filled" | "outlined" | "gradient" | "text";
    type size = "sm" | "md" | "lg";
    
    return (
        <button type={type} disabled={disabled} onClick={onClick} className={className}>
            {children}
        </button>
    );
}

export default Button;

interface Button {
    type?: string;
    variant?: string;
    size?: string;
    color?: string;
}

// variant: filled, gradient, outlined, text
// size: sm, md, lg
// color: primary, secondary, tailwindcss default
