<template>
	<header>
		<div class="brown-header">
			<img src="../assets/images/zootopia2.png" id="logo" />
			<img src="../assets/images/zootopia1.png" id="login-icon" />
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style scoped>
#login-icon {
	height: 40px;
}
#logo {
	height: 40px;
}

.brown-header {
	background-color: #a8856f;
	padding: 1rem 2rem;
  
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
}

.logo {
	width: 100px;
	height: auto;
}

.login-icon {
	width: 30px;
	height: 30px;
}
</style>
