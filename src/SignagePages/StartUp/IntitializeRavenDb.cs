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
        readonly IRavenDbSettings _settings;

        public IntitializeRavenDb(IContainer container, IRavenDbSettings settings)
        {
            _container = container;
            _settings = settings;
            _lazyStore = new Lazy<IDocumentStore>(CreateDocumentStore);
        }

        readonly Lazy<IDocumentStore> _lazyStore;

        IDocumentStore CreateDocumentStore()
        {
            var store = new EmbeddableDocumentStore
                            {
                                DataDirectory = _settings.DataDirectory
                            };
            store.Initialize();
            return store;
        }

        public override void Execute()
        {
            _container.Configure(c =>
            {
                c.For<IDocumentSession>().HybridHttpOrThreadLocalScoped().Use(() => _lazyStore.Value.OpenSession());
                c.For<IDocumentStore>().Singleton().Use(() => _lazyStore.Value);
            });
        }

        protected override void Disposing(bool disposed)
        {
            if (disposed)
            {
                _container.GetInstance<IDocumentStore>().Dispose();
            }
        }
    }
}