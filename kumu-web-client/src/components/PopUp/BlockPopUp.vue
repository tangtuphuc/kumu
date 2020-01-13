<template>
    <div class="block-popup">
        <div class="block-layout"></div>
        <div class="popup-box">
            <div class="popup-header">
                <div class="popup-title">{{ title }}</div>
                <div v-if="showButtonClose" class="close-button" @click="onClosed">
                    <img src="@/assets/img/close.png" alt />
                </div>
            </div>

            <div class="popup-body">
                <div class="message">
                    <p>{{ description }}</p>
                </div>

                <div class="feedback" v-if="showBoxInputFeedBack">
                    <textarea class="feedback-input" rows="3" v-model="feedBack"></textarea>
                    <span class="send-feedback-btn" @click="onSendFeedback">Send</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BlockPopUp',
    props: {
        title: {
            type: String,
            require: true,
            default: () => {
                console.log(
                    '%c BlockPopUp %c `title` missing. Generated default',
                    'background: #35495e ; padding: 1px; border-radius: 3px 0px 0px 3px;  color: #fff',
                    'color: #35495e'
                );
            }
        },
        description: {
            type: String,
            require: true,
            default: () => {
                console.log(
                    '%c BlockPopUp %c `description` missing. Generated default',
                    'background: #35495e ; padding: 1px; border-radius: 3px 0px 0px 3px;  color: #fff',
                    'color: #35495e'
                );
            }
        },
        showButtonClose: {
            type: Boolean,
            required: false,
            default: () => {
                console.log(
                    '%c BlockPopUp %c Not show close button by default',
                    'background: #35495e ; padding: 1px; border-radius: 3px 0px 0px 3px;  color: #fff',
                    'color: #35495e'
                );
            }
        },
        showBoxInputFeedBack: {
            type: Boolean,
            required: false,
            default: () => {
                console.log(
                    '%c BlockPopUp %c Not show close button by default input feedback by default',
                    'background: #35495e ; padding: 1px; border-radius: 3px 0px 0px 3px;  color: #fff',
                    'color: #35495e'
                );
            }
        }
    },
    data() {
        return {
            feedBack: ''
        };
    },
    methods: {
        onClosed() {
            if (!(this.$listeners && this.$listeners.onClosed)) {
                console.warn('BlockPopUp: Missing listener `onClosed`:');
            }
            this.$emit('onClosed');
        },
        onSendFeedback() {
            if (!(this.$listeners && this.$listeners.onSendFeedback)) {
                console.warn('BlockPopUp: Missing listener `onSendFeedback`:');
            }
            this.$emit('onSendFeedback', this.feedBack);
        }
    }
};
</script>

<style scoped lang="less">
@import '../../assets/less/common.less';

@import '../../assets/less/constant.less';

.block-popup {
    .block-layout {
        .block-background-full(99);
    }

    .popup-box {
        z-index: 100;
        position: fixed;
        width: 80%;
        right: 10%;
        left: 10%;

        .popup-header {
            .box-radius-up();
            height: 35px;
            background: @main-color;

            .popup-title {
                color: #fff;
                text-transform: uppercase;
                text-align: center;
                font-size: 16px;
                font-weight: bold;
                line-height: 40px;
            }

            .close-button {
                position: absolute;
                right: 0.5em;
                top: 0.2em;

                img {
                    height: 20px;
                }
            }
        }

        .popup-body {
            .box-radius-down();
            background: white;
            position: absolute;
            height: auto;
            width: 100%;

            .message {
                margin: 1em;

                p {
                    font-size: 18px;
                }
            }

            .feedback {
                .feedback-input {
                    .input-box();
                    width: 90%;
                }

                .send-feedback-btn {
                    .button();
                    width: 10%;
                }
            }
        }
    }
}
</style>
