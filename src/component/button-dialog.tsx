import { defineComponent, ref } from "vue";

import { ElDialog, ElButton } from 'element-plus'
import 'element-plus/dist/index.css'

export type ButtonDialogEvent = {
  openDialog: () => void;
  closeDialog: () => void;
};


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
  emits: {
    closeDialog: null as any as ButtonDialogEvent["closeDialog"],
    openDialog: null as any as ButtonDialogEvent["openDialog"],
  },
  setup(props, { emit }) {
    const showDialog = ref(false);

    function openDialog() {
      showDialog.value = true
      emit('openDialog')
    }

    function closeDialog() {
      showDialog.value = false
      emit('closeDialog')
    }

    return () => (
      <div>
        <ElButton
          onClick={openDialog}
        >
          {props.buttonLabel}
        </ElButton>

        {showDialog.value && (
          <ElDialog v-model={showDialog.value} onClosed={closeDialog}>
            {props.renderDialog()}
          </ElDialog>
        )}
      </div>
    );
  }
});