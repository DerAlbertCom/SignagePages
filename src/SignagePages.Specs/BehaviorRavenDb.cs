using Machine.Fakes;
using Raven.Client;
using Raven.Tests.Helpers;

namespace SignagePages.Specs
{
    public class BehaviorRavenDb
    {
        OnEstablish _context = accessor =>
        {
            _accessor = accessor;
            accessor.Configure(new RavenTestBase());
            var store = accessor.The<RavenTestBase>().NewDocumentStore();

            accessor.Configure<IDocumentStore>(store);

            store.Initialize();

            accessor.Configure(store.OpenSession());
        };

        OnCleanup _cleanup = subject =>
        {
            _accessor.The<IDocumentStore>().Dispose();
            _accessor.Configure<IDocumentStore>(null);
        };

        static IFakeAccessor _accessor;


        public static void WaitForIndexing()
        {
            RavenTestBase.WaitForIndexing(_accessor.The<IDocumentStore>());
        }
    }
}