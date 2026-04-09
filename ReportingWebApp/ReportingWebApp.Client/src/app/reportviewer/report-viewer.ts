import { Component, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { DxReportViewerComponent, DxReportViewerModule } from 'devexpress-reporting-angular';

@Component({
    selector: 'report-viewer',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './report-viewer.html',
    styleUrls: [
        "../../../node_modules/devextreme/dist/css/dx.light.css",
        "../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
        "../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
        "../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css"
    ],
    imports: [DxReportViewerModule]
})

export class ReportViewer {
    @ViewChild(DxReportViewerComponent, { static: false })
    protected viewer!: DxReportViewerComponent;
    protected reportUrl: string = "XtraReport1";
    protected invokeAction: string = '/DXXRDV';

    private findParameter(parametersModel: any, path: string) {
            return parametersModel.parameters.find((parameter: any) => parameter.path === path);
        }

    OnParametersInitialized(event: any) {
        const parametersModel = event.args.ParametersModel;

        const intParam = this.findParameter(parametersModel, "intParam");
        const booleanParam = this.findParameter(parametersModel, "booleanParam");
        const strParam = this.findParameter(parametersModel, "strParam");

        if (intParam && booleanParam && strParam) {
            // Specify an invisible integer parameter's value on viewer initialization.
            const invisibleIntParamValue = 42;
            parametersModel.setParameterValue("intParam", invisibleIntParamValue);

            // Specify a visible Boolean parameter's value on viewer initialization.
            const visibleBooleanParamValue = true;
            parametersModel.setParameterValue("booleanParam", visibleBooleanParamValue);

            // Update a string parameter value when a user changes the Boolean parameter value.
            booleanParam && booleanParam.events.on('propertyChanged', (args: any) => {
                if (args.propertyName === 'value') {
                    parametersModel.setParameterValue("strParam", args.newValue?.toString());
                }
            });
            event.args.Submit();
        }
    };
    constructor(@Inject('BASE_URL') protected readonly hostUrl: string) { }
}
