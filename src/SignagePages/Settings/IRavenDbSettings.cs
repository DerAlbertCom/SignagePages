using System;

namespace SignagePages.Settings
{
    public interface IRavenDbSettings
    {
        string DataDirectory { get; }
    }
}