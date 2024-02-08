interface LayoutProps {
  children?: React.ReactNode;
}

// este seria el layout principal de nuestra aplicacion
// en este caso no necesitamos un layout, pero este es un ejemplo que serviria para una implementacion mas compleja

const LayoutKairos = ({ children }: LayoutProps) => {
  return (
    <>{children}</>
  );
};

export default LayoutKairos;
