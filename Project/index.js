document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("studentForm");
      const studentList = document.getElementById("studentList");
      const addTab = document.getElementById("addTab");
      const viewTab = document.getElementById("viewTab");
      const addSection = document.getElementById("addSection");
      const viewSection = document.getElementById("viewSection");

      // Handle form submit
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const roll = document.getElementById("roll").value.trim();
        const course = document.getElementById("course").value;

        if (!name || !roll) {
          alert("Please fill all fields!");
          return;
        }

        let students = JSON.parse(localStorage.getItem("students")) || [];
        students.push({ name, roll, course });
        localStorage.setItem("students", JSON.stringify(students));

        form.reset();
        alert("Student Added Successfully!");
        // ❌ Do NOT auto-switch to View tab
      });

      // Load students into table
      function loadStudents() {
        let students = JSON.parse(localStorage.getItem("students")) || [];
        if (students.length === 0) {
          studentList.innerHTML = "<p style='color:white;text-align:center;'>No students added yet.</p>";
          return;
        }

        let table = "<table><tr><th>Name</th><th>Roll</th><th>Course</th><th>Action</th></tr>";
        students.forEach((s, index) => {
          table += `<tr>
                      <td>${s.name}</td>
                      <td>${s.roll}</td>
                      <td>${s.course}</td>
                      <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
                    </tr>`;
        });
        table += "</table>";
        studentList.innerHTML = table;
      }

      // Delete student
      window.deleteStudent = function(index){
        let students = JSON.parse(localStorage.getItem("students")) || [];
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
        loadStudents();
      }

      // Switch between tabs
      function switchTab(tab) {
        if (tab === "add") {
          addSection.style.display = "block";
          viewSection.style.display = "none";
        } else {
          addSection.style.display = "none";
          viewSection.style.display = "block";
          loadStudents();
        }
      }

      // Tab button listeners
      addTab.addEventListener("click", () => switchTab("add"));
      viewTab.addEventListener("click", () => switchTab("view"));

      // Start with Add Student tab
      switchTab("add");
    });