<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="50">
        <FormItem label="标题" prop="title">
            <Input v-model="formValidate.title" placeholder="输入标题"></Input>
        </FormItem>
        <FormItem label="标签" prop="tag">
            <Input v-model="formValidate.tag" placeholder="输入标签"></Input>
        </FormItem>
        <FormItem label="内容" prop="content">
            <Input v-model="formValidate.content" type="textarea" :autosize="{minRows: 12}" placeholder="文章内容"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>

<script>
import {addArticle} from '../api/article'

export default {
    data () {
        return {
            formValidate: {
                title: '',
                content: '',
                tag: ''
            },
            ruleValidate: {
                title: [
                    { required: true, message: '标题不为空', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '文章不为空', trigger: 'blur' }
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
                	console.log("文章添加")
                    addArticle(this.formValidate)
                    .then(() => {
                        this.$Message.success('文章添加成功!');
                        this.$router.push({name: 'index'})
                    })
                } else {
                    this.$Message.error('提交失败o(╥﹏╥)o');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>