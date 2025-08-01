class ModalComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <!-- Modal login -->
        <div id="loginModal" class="modal">
            <div class="modal-content">
                <span id="closeModal" style="cursor:pointer; float:right; font-size: 20px;">&times;</span>
                <h2>Iniciar sesión</h2>
                <form id="loginForm">
                    <label for="email">Correo:</label><br>
                    <input type="email" id="email" name="email" required><br><br>
                    <label for="password">Contraseña:</label><br>
                    <input type="password" id="password" name="password" required><br><br>
                    <div id="loginErrorMessage" style="color: red; text-align: center; margin-bottom: 10px; display: none;"></div>
                    <div class="button-container">
                        <button>Entrar</button>
                    </div>
                </form>
                <div style="margin-top: 20px; text-align: center; color: #f9a8d4;">
                    ¿No tienes cuenta?
                    <a href="#" id="registerLink" style="color: #ff69b4; text-decoration: none; font-weight: bold; cursor: pointer;">
                        Regístrate aquí
                    </a>
                </div>
            </div>
        </div>
  
        <!-- Modal registro -->
        <div id="registerModal" class="modal">
            <div class="modal-content">
                <span id="closeRegisterModal" style="cursor:pointer; float:right; font-size: 20px;">&times;</span>
                <h2>Registro</h2>
                <form id="registerForm">
                    <label for="regUsername">Usuario:</label><br>
                    <input type="text" id="regUsername" name="regUsername" required><br>
                    <small class="error-message" id="errorUsername" style="color:red;"></small><br>
  
                    <label for="regEmail">Correo electrónico:</label><br>
                    <input type="email" id="regEmail" name="regEmail" required><br>
                    <small class="error-message" id="errorEmail" style="color:red;"></small><br>
  
                    <label for="regPassword">Contraseña:</label><br>
                    <input type="password" id="regPassword" name="regPassword" required><br>
                    <small class="error-message" id="errorPassword" style="color:red;"></small><br>
  
                    <label for="regPasswordRepeat">Repite contraseña:</label><br>
                    <input type="password" id="regPasswordRepeat" name="regPasswordRepeat" required><br>
                    <small class="error-message" id="errorPasswordRepeat" style="color:red;"></small><br>
  
                    <label for="regBirthdate">Fecha de nacimiento:</label><br>
                    <input type="date" id="regBirthdate" name="regBirthdate" required><br>
                    <small class="error-message" id="errorBirthdate" style="color:red;"></small><br>
  
                    <div class="button-container">
                        <button type="submit">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('modal-component', ModalComponent);
  