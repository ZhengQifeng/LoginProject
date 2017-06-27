<template>  
  <div id="LoginContent" class="flex-column flex-around">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px" id="Login-Form" class="flex-column flex-around">
    	<el-form-item label="账号" prop="username">
    		<el-input v-model="ruleForm.username"></el-input>
    	</el-form-item>
    	<el-form-item label="密码" prop="password">
    		<el-input v-model="ruleForm.password" type="password"></el-input>
    	</el-form-item>
    </el-form>
    <div id="Login-Button" class="boder-center">
    	<el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
    </div>
  </div>
</template>
 
<script>
export default {
	name:'LoginContent',
  	data () {
  		var validatePass=(rule,value,callback)=>{
  			if(value===''){
  				callback(new Error('请输入密码'));
  			}else{
  				callback();
  			}
  		};
  		var validateUser=(rule,value,callback)=>{
  			if(value===''){
  				callback(new Error('请输入账号'));
  			}else{
  				callback();
  			}
  		};
    	return {
      		ruleForm:{
      			username:'',
      			password:''
      		},
      		rules: {
          		username: [
            		{ validator: validateUser, trigger: 'blur' }
          		],
          		password: [
            		{ validator: validatePass, trigger: 'blur' }
          		]
        	}
    	}
  	},
  	methods: {
      	submitForm(formName) {
        	this.$refs[formName].validate((valid) => {
          		if (valid) {
            		this.$message({
          				message: '登录成功！！',
          				type: 'success'
        			});          		
            	} else {
            		this.$message.error('登录失败！！');
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
	#LoginContent{
		width:60%;
		height:80%;
		margin:0 auto;
		margin-top:5%;
	}
	.text-center{
		text-align: center;
	}
	#Login-Form{
		height:70%;
		padding-top:10%;
		padding-bottom: 10%;
	}
	#Login-Button{
		height:30%;
	}
	.boder-center{
		margin:0 auto;
	}
</style>
