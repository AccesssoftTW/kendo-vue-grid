<template>
  <div id="vueapp" class="vue-app">
    <kendo-datasource
      ref="datasource1"
      :transport-read-url="
        'https://demos.telerik.com/kendo-ui/service/Products'
      "
      :transport-read-data-type="'jsonp'"
      :transport-update-url="
        'https://demos.telerik.com/kendo-ui/service/Products/Update'
      "
      :transport-update-data-type="'jsonp'"
      :transport-destroy-url="
        'https://demos.telerik.com/kendo-ui/service/Products/Destroy'
      "
      :transport-destroy-data-type="'jsonp'"
      :transport-create-url="
        'https://demos.telerik.com/kendo-ui/service/Products/Create'
      "
      :transport-create-data-type="'jsonp'"
      :transport-parameter-map="parameterMap"
      :schema-model-id="'ProductID'"
      :schema-model-fields="schemaModelFields"
      :batch="true"
      :page-size="20"
    >
    </kendo-datasource>

    <kendo-grid
      :height="600"
      :data-source-ref="'datasource1'"
      :editable="'popup'"
      :filterable="true"
      :pageable-page-sizes="true"
      :pageable-button-count="5"
      :reorderable="true"
      :sortable-mode="'multiple'"
      :sortable-allow-unsort="true"
      :sortable-show-indexes="true"
      :toolbar="['create', 'excel', 'pdf']"
      :excel-file-name="'Kendo UI Grid Export.xlsx'"
      :excel-proxy-URL="'https://demos.telerik.com/kendo-ui/service/export'"
      :excel-filterable="true"
      :selectable="'multiple cell'"
      :allow-copy="true"
      :navigatable="true"
      :pdf-all-pages="true"
      :pdf-avoid-links="true"
      :pdf-paper-size="'A4'"
      :pdf-margin="{ top: '2cm', left: '1cm', right: '1cm', bottom: '1cm' }"
      :pdf-landscape="true"
      :pdf-repeat-headers="true"
      :pdf-scale="0.8"
    >
      <kendo-grid-column
        :field="'ProductName'"
        :width="120"
      ></kendo-grid-column>
      <kendo-grid-column
        :field="'UnitPrice'"
        :title="'Unit Price'"
        :width="120"
        :format="'{0:c}'"
      ></kendo-grid-column>
      <kendo-grid-column
        :field="'UnitsInStock'"
        :title="'Units In Stock'"
        :width="120"
      ></kendo-grid-column>
      <kendo-grid-column
        :field="'Discontinued'"
        :width="120"
      ></kendo-grid-column>
      <kendo-grid-column
        :command="['edit', 'destroy']"
        :title="'&nbsp;'"
        :width="180"
      ></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script>
// import $ from "jquery";
import kendo from "@progress/kendo-ui";

export default {
  data() {
    return {
      //定義資料庫名稱、格式
      schemaModelFields: {
        ProductID: { editable: false, nullable: true },
        ProductName: { validation: { required: true } },
        UnitPrice: { type: "number", validation: { required: true, min: 1 } },
        Discontinued: { type: "boolean" },
        UnitsInStock: { type: "number", validation: { min: 0, required: true } }
      }
    };
  },
  methods: {
    parameterMap: function(options, operation) {
      if (operation !== "read" && options.models) {
        return { models: kendo.stringify(options.models) };
      }
    }
  }
};
</script>
