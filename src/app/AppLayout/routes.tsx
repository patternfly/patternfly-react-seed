export interface IAppRoute {
  label?: string;
  title: string;
  path: string;
  routes?: undefined;
}

export interface IAppRouteGroup {
  label: string;
  routes: IAppRoute[];
}

export type AppRouteConfig = IAppRoute | IAppRouteGroup;

const routes: AppRouteConfig[] = [
  {
    label: 'Inicio',
    title: 'Personal Expenses | Inicio',
    path: '/',
  },
  {
    label: 'Soporte',
    title: 'Personal Expenses | Soporte',
    path: '/support',
  },
  {
    label: 'Gastos',
    routes: [
      {
        label: 'Introducir Gasto',
        title: 'Gastos | Añadir Gasto',
        path: '/movements/add',
      },
      {
        label: 'Listar',
        title: 'Gastos | Listado',
        path: '/movements',
      },
    ],
  },
];

export { routes };
