<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anirban Mahanta | Data Analyst</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
</head>
<body class="bg-gray-900 text-white font-sans scroll-smooth">

  <!-- Navbar -->
  <nav class="flex justify-between items-center p-6 sticky top-0 bg-gray-900 z-50">
    <h1 class="text-xl font-bold">Anirban</h1>
    <div class="space-x-6">
      <a href="#about" class="hover:text-blue-400">About</a>
      <a href="#projects" class="hover:text-blue-400">Projects</a>
      <a href="#contact" class="hover:text-blue-400">Contact</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="text-center py-24" data-aos="fade-up">
    <h1 class="text-5xl font-bold mb-4">Data Analyst</h1>
    <p class="text-gray-400">Power BI | SQL | Excel | Python</p>
    <a href="#projects" class="mt-6 inline-block px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">View My Work</a>
  </section>

  <!-- About -->
  <section id="about" class="p-10 max-w-4xl mx-auto" data-aos="fade-right">
    <h2 class="text-3xl font-bold mb-4">About Me</h2>
    <p class="text-gray-400">I transform raw data into business insights using Power BI, SQL, and Excel. Passionate about solving real-world problems with data.</p>
  </section>

  <!-- Skills -->
  <section class="p-10 text-center" data-aos="zoom-in">
    <h2 class="text-3xl font-bold mb-6">Skills</h2>
    <div class="flex flex-wrap justify-center gap-4">
      <span class="bg-gray-800 px-4 py-2 rounded-xl">Power BI</span>
      <span class="bg-gray-800 px-4 py-2 rounded-xl">SQL</span>
      <span class="bg-gray-800 px-4 py-2 rounded-xl">Excel</span>
      <span class="bg-gray-800 px-4 py-2 rounded-xl">Python</span>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="p-10">
    <h2 class="text-3xl font-bold mb-6 text-center" data-aos="fade-up">Projects</h2>
    <div class="grid md:grid-cols-3 gap-6">

      <div class="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition" data-aos="flip-left">
        <h3 class="text-xl font-semibold">Sales Dashboard</h3>
        <p class="text-gray-400 mt-2">Interactive Power BI dashboard for sales insights.</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition" data-aos="flip-left" data-aos-delay="100">
        <h3 class="text-xl font-semibold">Profit Analysis</h3>
        <p class="text-gray-400 mt-2">Analyzed loss-making products and improved margins.</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition" data-aos="flip-left" data-aos-delay="200">
        <h3 class="text-xl font-semibold">SQL Data Cleaning</h3>
        <p class="text-gray-400 mt-2">Handled large datasets with SQL transformations.</p>
      </div>

    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="text-center p-10" data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4">Contact</h2>
    <p class="text-gray-400">Email: yourmail@gmail.com</p>
  </section>

  <!-- Footer -->
  <footer class="text-center p-6 text-gray-500">
    © 2026 Anirban Mahanta
  </footer>

<script>
  AOS.init({ duration: 1000, once: true });
</script>

</body>
</html>
