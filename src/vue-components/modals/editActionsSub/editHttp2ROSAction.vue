<template>
    <div class="container-fluid px-0">
        <h5 class="mb-3">HTTP → ROS Bridge</h5>

        <div class="row">
            <label class="col-12 col-md-4 normal-text" for="inputRestUri">HTTP URL</label>
            <div class="col-12 col-md-7">
                <input class="col-12" id="inputRestUri" v-model="action.restUrl" spellcheck="false" autocomplete="true"
                       type="text" placeholder="http://<ros-bridge-ip:5000>/command"/>
            </div>
        </div>

        <div class="row">
            <label class="col-12 col-md-4 normal-text" for="body">Payload</label>
            <div class="col-12 col-md-7">
                <textarea id="body" v-model="action.body" class="col-12" rows="2"
                          placeholder="{ &quot;data&quot;: &quot;hello&quot; }"
                          spellcheck="false" type="text"/>
            </div>
        </div>

        <div class="row">
            <label class="col-12 col-md-4 normal-text" for="method">HTTP Method</label>
            <div class="col-12 col-md-7">
                <select id="method" v-model="action.method" class="col-12">
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                </select>
            </div>
        </div>

        <div class="row">
            <label class="col-12 col-md-4 normal-text" for="content-type">HTTP Content-Type</label>
            <div class="col-12 col-md-7">
                <input id="content-type" v-model="action.contentType" class="col-12"
                       placeholder="application/json"
                       spellcheck="false" autocomplete="true" type="text"/>
            </div>
        </div>

        <!-- Opcionales del HTTP original -->
        <div class="row">
            <label class="col-12 col-md-4 normal-text" for="auth-user">Auth User</label>
            <div class="col-12 col-md-7">
                <input id="auth-user" v-model="action.authUser" class="col-12"
                       type="text" placeholder="optional"/>
            </div>
        </div>

        <div class="row">
            <label class="col-12 col-md-4 normal-text" for="auth-pw">Auth Password</label>
            <div class="col-12 col-md-7">
                <input id="auth-pw" v-model="action.authPw" class="col-12"
                       type="password" placeholder="optional"/>
            </div>
        </div>

        <div class="row" v-if="action.isLiveAction">
            <div class="col-12">
                <input id="useCorsProxy" v-model="action.useCorsProxy" type="checkbox"/>
                <label class="normal-text" for="useCorsProxy">Use CORS Proxy</label>
            </div>
        </div>

        <!-- Campo propio para ROS si lo necesitas -->
        <!-- Ejemplo: -->
        <div class="row">
            <label class="col-12 col-md-4 normal-text" for="ros-topic">ROS Topic</label>
            <div class="col-12 col-md-7">
                <input id="ros-topic" v-model="action.rosTopic" class="col-12"
                       type="text" placeholder="/asterics_commands (default)"/>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "EditHttp2ROSAction",
    props: ['action'],
    computed: {},
    methods: {},
    mounted() {}
}
</script>

<style scoped>
.normal-text {
    font-weight: normal;
}

.row {
    margin-bottom: 1em;
}
</style>
