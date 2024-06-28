<script>
          const $nav = document.querySelector("nav");
          const $navOpn = document.querySelector(".btn-nav");
          const $navCls = document.querySelector(".btn-close");

          $navOpn.addEventListener("click", () => {
               $nav.style.left = 0;
          });
          $navCls.addEventListener("click", () => {
               $nav.style.left = "-100%";
          });
     </script>