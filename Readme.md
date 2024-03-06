<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1034344)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# Reporting for Angular - Handle the ParametersInitialized event

The example below demonstrates how to handle the [ParametersInitialized](https://docs.devexpress.com/XtraReports/DevExpress.XtraReports.Web.WebDocumentViewerClientSideEvents.ParametersInitialized) event to do the following:

1. Initialize values of a visible and invisible parameter before the viewer loads the document.
2. Change a parameter value in the panel's editor when a user assigns a value to another parameter.

![](Images/reporting-angular-customize-parameter-panel.png)

## How to Run the Example

Download the project and do the following:

1. Update NuGet packages.
2. Build and run the project.
3. Navigate to the page that contains the document viewer.

## Files to Review

- [report-viewer.html](ReportingWebApp/ClientApp/src/app/reportviewer/report-viewer.html)
- [report-viewer.ts](ReportingWebApp/ClientApp/src/app/reportviewer/report-viewer.ts)

## Documentation

- [Specify Parameter Values in an Angular Reporting Application](https://docs.devexpress.com/XtraReports/401930)

## More Examples

- [Reporting for Angular - Use Custom UI Elements to Specify Parameter Values](https://github.com/DevExpress-Examples/angular-reporting-use-custom-ui-elements-to-specify-parameters)
