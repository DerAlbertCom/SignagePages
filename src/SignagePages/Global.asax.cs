using System;
using Aperea.Infrastructure.Bootstrap;
using Aperea.Infrastructure.IoC;

namespace SignagePages
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            RegisterStructureMap.Execute();
            Bootstrapper.Start();
        }

        protected void Application_End(object sender, EventArgs e)
        {
            Bootstrapper.End();
        }
    }
}