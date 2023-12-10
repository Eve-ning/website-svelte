<script lang="ts">
    import {base} from '$app/paths';
    import '../app.css';
</script>

<div class="container max-w-full p-0 m-0 dark:bg-stone-950">


    <nav class="flex justify-between px-5 py-5 rounded-full
                shadow-md gap-3">
        <!-- Signature -->
        <a href="{base}/">
            <img
                    alt="Logo"
                    class="rounded-full border
                           border-teal-700
                           p-1 shadow-md"
                    src="/signature.png"
                    width="42"
            />
        </a>
        <p class="my-auto text-xl drop-shadow-md">
            <span class="text-teal-800 dark:text-teal-300">good</span>
            <span class="text-amber-800 dark:text-amber-300">Evening</span>
        </p>
        <!--        <div class="">-->
        <!--            <div>-->
        <!--                <Icon class="rounded-full p-1" size="42" solid src={Home}/>-->
        <!--            </div>-->
        <!--        </div>-->
    </nav>
    <main>
        <slot/>
    </main>

    <footer class="footer">
        <p class="footer__text">Built with SvelteKit + Sanity</p>
    </footer>
</div>
