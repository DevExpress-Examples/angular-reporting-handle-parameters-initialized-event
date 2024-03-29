import { Component, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { DxReportViewerComponent } from 'devexpress-reporting-angular';

@Component({
    selector: 'report-viewer',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './report-viewer.html',
    styleUrls: [
        "../../../node_modules/devextreme/dist/css/dx.common.css",
        "../../../node_modules/devextreme/dist/css/dx.light.css",
        "../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
        "../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
        "../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css"
    ]
})

export class ReportViewerComponent {
    @ViewChild(DxReportViewerComponent, { static: false })
    viewer!: DxReportViewerComponent;
    reportUrl: string = "XtraReport1";
    invokeAction: string = '/DXXRDV';

    OnParametersInitialized(event: any) {
        // Specify an invisible integer parameter's value on viewer initialization.
        var invisibleIntParamValue = 42;
        var intParam = event.args.ActualParametersInfo.filter(
            (x: any) => x.parameterDescriptor.name == "intParam")[0];
        intParam.value = invisibleIntParamValue;

        // Specify a visible Boolean parameter's value on viewer initialization.
        var visibleBooleanParamValue = true;
        var booleanParam = event.args.ActualParametersInfo.filter(
            (x: any) => x.parameterDescriptor.name == "booleanParam")[0];
        booleanParam.value = visibleBooleanParamValue;

        // Update a string parameter value when a user changes the Boolean parameter value.
        var strParam = event.args.ActualParametersInfo.filter(
            (x: any) => x.parameterDescriptor.name == "strParam")[0];

        booleanParam && booleanParam.events.on('propertyChanged', (args: any) => {
            if (args.propertyName === 'value') {
                strParam.value = args.newVal.toString();
            }
        });

        intParam & booleanParam & strParam && event.args.Submit();
    }

    constructor(@Inject('BASE_URL') public hostUrl: string) { }
}