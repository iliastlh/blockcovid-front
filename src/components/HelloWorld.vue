<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="form-inline">
    <a href="/login" data-title="Se connecter"></a>
<button type="button" class="block2">Block Button</button>

  </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">a {
	position: relative;
	display: inline-block;
	padding: 1.2em 2em;
	text-decoration: none;
	text-align: center;
	cursor: pointer;
	user-select: none;
	color: white;
	
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(135deg, #6e8efb, #a777e3);
		border-radius: 4px;
		transition: box-shadow .5s ease, transform .2s ease; 
		will-change: transform;
		box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
		
	}
	
	&:hover::before {
		box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
	}
	
	&::after {
		position: relative;
		display: inline-block;
		content: attr(data-title);
		transition: transform .2s ease; 
		font-weight: bold;
		letter-spacing: .01em;
		will-change: transform;
		
	}
}

.form-inline {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	transform-style: preserve-3d;
	transform: perspective(800px);
}

</style>
