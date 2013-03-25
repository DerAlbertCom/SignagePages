using System;
using Aperea.Infrastructure.Bootstrap;
using Raven.Client;
using Raven.Client.Embedded;
using SignagePages.Settings;
using StructureMap;

namespace SignagePages.StartUp
{
    public class IntitializeRavenDb : BootstrapItem
    {
        readonly IContainer _container;

        public IntitializeRavenDb(IContainer container)
        {
            _container = container;
        }

        static readonly Lazy<IDocumentStore> _lazyStore = new Lazy<IDocumentStore>(CreateDocumentStore);

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

        public override void Execute()
        {
            _container.Configure(c =>
            {
                c.For<IDocumentSession>().Singleton().Use(() => _lazyStore.Value.OpenSession());
                c.For<IDocumentStore>().Singleton().Use(() => _lazyStore.Value);
            });
        }
    }
}