import { defineComponent, ref} from "vue";

export const Button = defineComponent({
    setup(props, ctx) {
        const showDialog = ref(false);

        const toggleDialog = () => {
          showDialog.value = !showDialog.value;
        };

        return () =>       
        <div>
        <button onClick={toggleDialog}>Open Dialog</button>
        {showDialog.value && (
          <div class="ttttttttttttttt" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
            <h2>Test Dialog</h2>
            <button onClick={toggleDialog}>Close</button>
          </div>
        )}
      </div>
    },
});
