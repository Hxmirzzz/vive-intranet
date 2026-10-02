import { createBrowserRouter } from 'react-router-dom';
import IntranetLayout from '../../shared/ui/layouts/IntranetLayout';
import PortalInicio from '../../features/inicio/infrastructure/ui/PortalInicio';

const Psicologia = () => <div className="pt-40 px-8 text-center text-2xl font-bold">Bienvenido al Panel de Psicología</div>;
const SST = () => <div className="pt-40 px-8 text-center text-2xl font-bold">Bienvenido al Panel de SST</div>;
const Tecnologia = () => <div className="pt-40 px-8 text-center text-2xl font-bold">Bienvenido al Panel de Tecnología</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IntranetLayout />, // El esqueleto con el Navbar
    children: [
      {
        index: true, // Ruta por defecto (/)
        element: <PortalInicio />,
      },
      {
        path: "psicologia",
        element: <Psicologia />, // Se renderizará dentro de <Outlet /> en IntranetLayout
      },
      {
        path: "sst",
        element: <SST />,
      },
      {
        path: "tecnologia",
        element: <Tecnologia />,
      }
    ]
  }
]);