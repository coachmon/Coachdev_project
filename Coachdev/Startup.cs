using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Coachdev.Startup))]
namespace Coachdev
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
