using System;
using System.IO;
using System.Web.Hosting;
using Aperea.Settings;

namespace SignagePages.Settings
{
    public class RavenDbSettings : IRavenDbSettings
    {
        readonly IApplicationSettings _settings;

        public RavenDbSettings(IApplicationSettings settings)
        {
            _settings = settings;
        }

        public string DataDirectory
        {
            get
            {
                var path = _settings.Get("Raven/DataDir", () => "~/App_Data");
                if (path.StartsWith(@"~"))
                {
                    if (HostingEnvironment.IsHosted)
                    {
                        path = HostingEnvironment.MapPath(path);
                    }
                    else
                    {
                        throw new ApplicationException(
                            "application is not hosted in an asp.net web server environment, use an absolute path for Raven/DataDir");
                    }
                }
                if (!Directory.Exists(path))
                {
                    throw new ApplicationException(
                        string.Format("the Raven/DataDir {0} must exist for storing the database", path));
                }
                return path;
            }
        }
    }
}