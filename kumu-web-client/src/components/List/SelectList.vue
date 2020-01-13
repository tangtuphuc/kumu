<template>
    <div class="list-wrapper">
        <div class="item-row">
            <div class="item" v-for="(item, index) in itemList" :key="index" @click="itemClick(item)">
                <div
                    :class="{
                        'content-item': true,
                        'selected-item': isSelected(item)
                    }"
                >
                    {{ item[textShowField] }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectList',
    props: {
        itemList: {
            type: Array,
            required: false,
            default: () => {
                console.warn('SelectList: Missing `itemList`');
                return [];
            }
        },
        textShowField: {
            type: String,
            required: false,
            default: 'textShow'
        },
        selected: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            selectedItem: this.selected
        };
    },
    methods: {
        isSelected(item) {
            return item[this.textShowField] === this.selectedItem;
        },
        itemClick(item) {
            this.selectedItem = item[this.textShowField];
            if (!(this.$listeners && this.$listeners.clickItem)) {
                console.warn('SelectList: Missing listener `clickItem`');
            }
            this.$emit('clickItem', item);
        }
    }
};
</script>

<style scoped lang="less">
@import '../../assets/less/common.less';
@import '../../assets/less/constant.less';

@spacing-standard: 0.5em;

@separator-color: #c1b7b7;

.focusing-item-mixin() {
    background-color: @focus-bg-color;
    color: @focus-text-color;
}

.selected-item-mixin() {
    .focusing-item-mixin();
}

.unselected-item-mixin() {
    background-color: #f2f2f2;
    color: #9b9b9b;
}

.list-wrapper {
    font-size: 20px;

    .item-row {
        .item {
            text-align: center;
            cursor: pointer;
            border-top: 1px solid @separator-color;
            margin: 0px;

            .content-item {
                .unselected-item-mixin();
                padding-top: @spacing-standard;
                padding-bottom: @spacing-standard;
                min-width: 160px;
                font-weight: 600;
            }
            &:hover .content-item {
                .focusing-item-mixin();
            }

            .selected {
                .selected-item-mixin();
            }
        }

        .item:first-child {
            border-top: none;
        }
    }
}
</style>
