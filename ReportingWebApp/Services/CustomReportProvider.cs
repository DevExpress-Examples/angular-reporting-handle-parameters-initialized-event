using DevExpress.XtraReports.Services;
using DevExpress.XtraReports.UI;
using ReportingWebApp.PredefinedReports;

namespace ReportingWebApp.Services {
    public class CustomReportProvider : IReportProvider {
        public XtraReport GetReport(string id, ReportProviderContext context) {
            return new XtraReport1();
        }
    }
}
