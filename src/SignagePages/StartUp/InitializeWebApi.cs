using System.Web.Routing;
using Aperea.Infrastructure.Bootstrap;
using System.Web.Http;
using SignagePages.Infrastructure.IoC;
using StructureMap;

namespace SignagePages.StartUp
{
    public class InitializeWebApi : BootstrapItem
    {
        readonly IContainer _container;

        public InitializeWebApi(IContainer container)
        {
            _container = container;
        }

        public override void Execute()
        {
            RegisterRoutes(RouteTable.Routes);
            RegisterIoC(GlobalConfiguration.Configuration);
        }

        void RegisterIoC(HttpConfiguration configuration)
        {
            configuration.DependencyResolver = new StructureMapResolver(_container);
        }

        void RegisterRoutes(RouteCollection routes)
        {
            routes.MapHttpRoute(
                name: "SignageWebApiDefault",
                routeTemplate: "api/{controller}/{id}",
                defaults: new {id = RouteParameter.Optional}
                );
        }
    }
}