import { defineComponent, ref } from "vue";

import { ElDialog, ElButton } from 'element-plus'
import 'element-plus/dist/index.css'

export const ButtonDialog = defineComponent({
  name: 'ModernButtonDialog',
  props: {
    buttonLabel: {
      type: String,
      required: true
    },
    renderDialog: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const showDialog = ref(false);

    return () => (
      <div>
        <ElButton
          onClick={() => showDialog.value = true}
        >
          {props.buttonLabel}
        </ElButton>

        {showDialog.value && (
          <ElDialog v-model={showDialog.value}>
            {props.renderDialog()}
          </ElDialog>
        )}
      </div>
    );
  }
});