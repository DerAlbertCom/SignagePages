using System;
using Raven.Client;
using Raven.Client.Embedded;
using SignagePages.Settings;
using StructureMap.Configuration.DSL;

namespace SignagePages.Infrastructure.IoC
{
    public class RavenDbRegistry : Registry
    {

        static readonly Lazy<IDocumentStore> LazyStore = new Lazy<IDocumentStore>(CreateDocumentStore);

        static IDocumentStore CreateDocumentStore()
        {
            var settings = new RavenDbSettings();

            var store = new EmbeddableDocumentStore
                            {
                                DataDirectory = settings.DataDirectory
                            };
            store.Initialize();
            return store;
        }

        public RavenDbRegistry()
        {
            For<IDocumentSession>().Singleton().Use(() => LazyStore.Value.OpenSession());
            For<IDocumentStore>().Singleton().Use(() => LazyStore.Value);
        }

    }
}