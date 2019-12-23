import Vue from 'vue'
import '@progress/kendo-theme-default/dist/all.css'

import { Grid, GridColumn,GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { DataSource,
    HierarchicalDataSource,
    GanttDataSource,
    GanttDependencyDataSource,
    PivotDataSource,
    SchedulerDataSource,
    TreeListDataSource,
    DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
import JSZip from 'jszip';

Vue.use(GridInstaller)
Vue.use(DataSourceInstaller)
window.JSZip = JSZip;

new Vue({
    components: {
        Grid,
        GridColumn,
        DataSource,
        HierarchicalDataSource,
        GanttDataSource,
        GanttDependencyDataSource,
        PivotDataSource,
        SchedulerDataSource,
        TreeListDataSource,
    }
});
