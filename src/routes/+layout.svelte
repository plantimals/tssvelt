<script>
    import "../app.css";
</script>


<body>
    <header class="content-center">
        <nav class="flex items-center justify-between flex-wrap p-6">
            <a href="/">
                <div class="flex items-center flex-no-shrink mr-6">
                    <!-- <img src="/images/drss-icon-3.svg" alt="drss logo" width="64px"> -->
                    <span class="pl-4 font-semibold text-6xl tracking-tight">DRSS</span>
                </div>
            </a>
        </nav>
    </header>
    <main>
        <slot />
    </main>
    <footer class="text-xs">
        <div class="text-center">
            "keep circulating the tapes"
        </div>
    </footer>
</body>