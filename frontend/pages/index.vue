<template>
    <div>
        <center>
            <h1>Welcome to the Tasks App!</h1>
            <p>This application is for manage tasks of students.</p>
            <br />
            <NuxtLink to="/tasks">
                Go to tasks page
            </NuxtLink>
            <br />
            <NuxtLink to="/help">
                Go to help page
            </NuxtLink>
        </center>
    </div>
</template>
<script>
definePageMeta({
    layout: "blank"
});
</script>