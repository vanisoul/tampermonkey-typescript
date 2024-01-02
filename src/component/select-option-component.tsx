import { defineComponent, PropType } from 'vue';
import { ElButton, ElRow, ElCol } from 'element-plus';

export type SelectOptionComponentEvent = {
    selectOption: (idx: number, option: string) => void;
};

export const SelectOptionComponent = defineComponent({
    name: 'SelectOptionComponent',
    props: {
        renderTitle: {
            type: Function,
            required: true
        },
        options: Array as PropType<string[]>,
    },
    emits: {
        selectOption: null as any as SelectOptionComponentEvent["selectOption"],
    },
    setup(props, { emit }) {
        const handleSelectOption = (idx: number, option: string) => {
            emit('selectOption', idx, option);
        };

        return () => (
            <div>
                <ElRow>
                    <ElCol>{props.renderTitle()}</ElCol>
                </ElRow>
                <ElRow>
                    {props.options?.map((option, idx) => (
                        <ElCol key={option}>
                            <ElButton onClick={() => handleSelectOption(idx, option)}>{option}</ElButton>
                        </ElCol>
                    ))}
                </ElRow>
            </div>
        );
    },
});
