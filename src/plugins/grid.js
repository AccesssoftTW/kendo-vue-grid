import Vue from 'vue'
import '@progress/kendo-theme-default/dist/all.css'

import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { DataSource,
    HierarchicalDataSource,
    GanttDataSource,
    GanttDependencyDataSource,
    PivotDataSource,
    SchedulerDataSource,
    TreeListDataSource,
    DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

Vue.use(GridInstaller)
Vue.use(DataSourceInstaller)

new Vue({
    components: {
        Grid,
        DataSource,
        HierarchicalDataSource,
        GanttDataSource,
        GanttDependencyDataSource,
        PivotDataSource,
        SchedulerDataSource,
        TreeListDataSource,
    }
});
