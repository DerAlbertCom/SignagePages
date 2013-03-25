using System;
using System.IO;
using System.Web.Hosting;
using Aperea.Settings;

namespace SignagePages.Settings
{
    public class RavenDbSettings
    {
        readonly ApplicationSettings _settings;

        public RavenDbSettings()
        {
            _settings = new ApplicationSettings();
        }

        public string DataDirectory
        {
            get { 
                var path = _settings.Get("Raven/DataDir", () => "~/App_Data"); 
                if (path.StartsWith(@"~"))
                {
                    path = HostingEnvironment.MapPath(path);
                }
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
                return path;
            }
        }
    }
}