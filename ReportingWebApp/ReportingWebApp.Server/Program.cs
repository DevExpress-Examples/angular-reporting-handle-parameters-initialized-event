using DevExpress.AspNetCore;
using DevExpress.AspNetCore.Reporting;
using DevExpress.Security.Resources;
using DevExpress.XtraReports.Services;
using ReportingWebApp.Server.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDevExpressControls();
builder.Services.AddMvc();
builder.Services.ConfigureReportingServices(configurator => {
    if(builder.Environment.IsDevelopment())
        configurator.UseDevelopmentMode();
    configurator.ConfigureWebDocumentViewer(viewerConfigurator => {
        viewerConfigurator.UseCachedReportSourceBuilder();
    });
});
builder.Services.AddScoped<IReportProvider, CustomReportProvider>();

var app = builder.Build();

var contentDirectoryAllowRule = DirectoryAccessRule.Allow(new DirectoryInfo(Path.Combine(app.Environment.ContentRootPath, "Content")).FullName);
AccessSettings.ReportingSpecificResources.SetRules(contentDirectoryAllowRule, UrlAccessRule.Deny());

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.UseDevExpressControls();
System.Net.ServicePointManager.SecurityProtocol |= System.Net.SecurityProtocolType.Tls12;
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("/index.html");

app.Run();