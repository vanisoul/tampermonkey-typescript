import { defineComponent, ref, PropType, onMounted, onUnmounted } from 'vue';
import { ElDialog, ElInput, ElButton } from 'element-plus';
import 'element-plus/dist/index.css';

export type PromptEvent = {
    confirm: (input: string) => void;
    close: () => void;
};

export const PromptComponent = defineComponent({
    name: 'PromptComponent',
    props: {
        title: {
            type: String,
            required: true
        },
        showDialog: {
            type: Boolean,
            required: true
        },
        inputValue: {
            type: String,
            required: true
        },
        validate: {
            type: Function as PropType<(input: string) => boolean | string>,
            required: true
        }
    },
    emits: {
        confirm: null as any as PromptEvent["confirm"],
        close: null as any as PromptEvent["close"],
    },
    setup(props, { emit }) {
        const errorMessage = ref('');

        const handleClose = () => {
            errorMessage.value = '';
            emit("close");
        };

        const handleConfirm = () => {
            const validationResult = props.validate(props.inputValue);
            if (validationResult === true) {
                emit('confirm', props.inputValue);
                handleClose();
            } else {
                errorMessage.value = typeof validationResult === 'string' ? validationResult : 'Invalid input';
            }
        };

        // onMounted, onUnmounted 綁定 Enter 事件 觸發 handleConfirm
        function handleEnter(event: KeyboardEvent) {
            if (event.key === 'Enter') {
                handleConfirm();
            }
        }

        onMounted(() => {
            document.addEventListener('keydown', handleEnter);
        });

        onUnmounted(() => {
            document.removeEventListener('keydown', handleEnter);
        });

        return () => (
            <ElDialog modelValue={props.showDialog} onClose={handleClose} title={props.title}>
                <ElInput v-model={props.inputValue} />
                <p style={{ color: 'red' }}>{errorMessage.value}</p>
                <div style={{ "margin-top": "0.5rem" }}>
                    <ElButton onClick={handleClose}>取消</ElButton>
                    <ElButton type="primary" onClick={handleConfirm}>確認</ElButton>
                </div>
            </ElDialog>
        );
    }
});
