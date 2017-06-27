<template>  
  <div id="RegisterContent" class="flex-column flex-around">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px" id="Login-Form" class="flex-column flex-around">
    	<el-form-item label="账号" prop="username">
    		<el-input v-model="ruleForm.username"></el-input>
    	</el-form-item>
    	<el-form-item label="密码" prop="password">
    		<el-input v-model="ruleForm.password" type="password"></el-input>
    	</el-form-item>
    	<el-form-item label="确认密码" prop="checkPass">
    		<el-input v-model="ruleForm.checkPass" type="password"></el-input>
    	</el-form-item>
    </el-form>
    <div id="Login-Button" class="boder-center">
    	<el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
    </div>
  </div>
</template>
 
<script>
export default {
	name:'RegisterContent',
  	data () {
  		var validateUser=(rule,value,callback)=>{
  			if(value===''){
  				callback(new Error('请输入账号'));
  			}else{
  				callback();
  			}
  		};
  		var validatePass = (rule, value, callback) => {
        	if (value === '') {
          		callback(new Error('请输入密码'));
        	} else {
          		if (this.ruleForm.checkPass !== '') {
            		this.$refs.ruleForm.validateField('checkPass');
          		}
          		callback();
        	}
      	};
      	var validatePass2 = (rule, value, callback) => {
        	if (value === '') {
          		callback(new Error('请再次输入密码'));
        	} else if (value !== this.ruleForm.password) {
          		callback(new Error('两次输入密码不一致!'));
        	} else {
          		callback();
        	}
      	};
    	return {
      		ruleForm:{
      			username:'',
      			password:'',
      			checkPass:''
      		},
      		rules: {
          		username: [
            		{ validator: validateUser, trigger: 'blur' }
          		],
          		password: [
            		{ validator: validatePass, trigger: 'blur' }
          		],
          		checkPass:[
          			{ validator: validatePass2, trigger: 'blur'}
          		]
        	}
    	}
  	},
  	methods: {
      	submitForm(formName) {
        	this.$refs[formName].validate((valid) => {
          		if (valid) {
            		this.$message({
          				message: '注册成功！！',
          				type: 'success'
        			});          		
            	} else {
            		this.$message.error('注册失败！！');
            		return false;
          		}
        	});
      	},
      	resetForm(formName) {
        	this.$refs[formName].resetFields();
      	}
    }
}
</script>
<style>
	#RegisterContent{
		width:60%;
		height:80%;
		margin:0 auto;
		margin-top: 5%;
	}
</style>
