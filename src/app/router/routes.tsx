import { createBrowserRouter } from 'react-router-dom';
import IntranetLayout from '../../shared/ui/layouts/IntranetLayout';
import PortalInicio from '../../features/inicio/infrastructure/ui/PortalInicio';
import PanelPsicologia from '../../features/psicologia/infrastructure/ui/PanelPsicologia';
import PanelEventos from '../../features/eventos/infrastructure/ui/PanelEventos';

const Psicologia = () => <PanelPsicologia />;
const Eventos = () => <PanelEventos />;
const SST = () => <div className="pt-40 px-8 text-center text-2xl font-bold">Bienvenido al Panel de SST</div>;
const Tecnologia = () => <div className="pt-40 px-8 text-center text-2xl font-bold">Bienvenido al Panel de Tecnología</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IntranetLayout />,
    children: [
      {
        index: true,
        element: <PortalInicio />,
      },
      {
        path: "eventos",
        element: <Eventos />,
      },
      {
        path: "psicologia",
        element: <Psicologia />,
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