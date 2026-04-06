using DevExpress.XtraReports.Services;
using DevExpress.XtraReports.UI;
using ReportingWebApp.PredefinedReports;

namespace ReportingWebApp.Server.Services {
    public class CustomReportProvider : IReportProvider {
        public XtraReport GetReport(string id, ReportProviderContext context) {
            return new XtraReport1();
        }
    }
}
