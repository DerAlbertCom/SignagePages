using System.Web.Optimization;
using Aperea.Infrastructure.Bootstrap;

namespace SignagePages.StartUp
{
    public class IntitializeBundles : BootstrapItem
    {
        public override void Execute()
        {
            RegisterBundles(BundleTable.Bundles);
        }

        void RegisterBundles(BundleCollection bundles)
        {
            var appBundle = new ScriptBundle("~/resources/app_js")
                .IncludeDirectory("~/app", "*dataaccess.js")
                .IncludeDirectory("~/app", "*directives.js")
                .IncludeDirectory("~/app", "*controller.js")
                .IncludeDirectory("~/app", "*routes.js")
                .IncludeDirectory("~/app", "*factories.js")
                .Include("~/app/app.js");

            var frameworkBundle = new ScriptBundle("~/resources/framework_js")
                .Include("~/Scripts/jQuery-{version}.js",
                         "~/Scripts/angular.js",
                         "~/Scripts/angular-resource.js",
                         "~/Scripts/i18n/angular-locale_de-de.js",
                         "~/Scripts/bootstrap.js");

            var cssBundle = new StyleBundle("~/resources/style_css")
                .Include("~/Content/bootstrap.css","~/Content/app.css");

            bundles.Add(appBundle);
            bundles.Add(frameworkBundle);
            bundles.Add(cssBundle);
        }
    }
}