<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="50">
        <FormItem label="名称" prop="name">
            <Input v-model="formValidate.name" placeholder="输入名称"></Input>
        </FormItem>
        <FormItem label="留言" prop="content">
            <Input v-model="formValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="你的留言"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
import {addComment, replyComment} from '../api/comment'
import {updateArticleComment} from '../api/article'
import {mapActions} from 'vuex'

export default {
    data () {
        return {
            formValidate: {
                name: '',
                content: ''
            },
            ruleValidate: {
                name: [
                    { required: true, message: '名字不为空', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '留言不为空', trigger: 'blur' },
                    { type: 'string', max: 80, message: '留言不超过80个字符', trigger: 'blur' }
                ]
            }
        }
    },
    props: {
        replyType: {
            type: String,
            default: ''
        },
        targetId: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    if (this.replyType === 'addComInCom') {
                        //留言，不是对别人的回复
                        addComment(this.formValidate).then(() => {
                            this.$emit("refresh")   
                            this.$Message.success('留言添加成功!开始更新留言...');
                            this.updateLatestComment(this.formValidate)
                            window.scrollTo (0, 0)
                        })  
                    } else if (this.replyType === 'replyComment') {
                        //对留言的回复
                        replyComment(this.targetId, this.formValidate).then(() => {
                            this.$emit("refresh")
                            this.$Message.success('回复提交成功!开始更新留言...');
                        })
                    } else {
                        //文章数据的留言更新
                        updateArticleComment(this.targetId, this.formValidate)
                        .then(() => {
                            this.$emit("refresh")
                            this.$Message.success('回复提交成功!开始更新留言...');
                            if (this.replyType === 'addComInArt') {
                                window.scrollTo (0, 0)
                            }
                        })
                    }
                } else {
                    this.$Message.error('提交失败o(╥﹏╥)o');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        ...mapActions([
          'updateLatestComment'
        ])
    }
}
</script>
