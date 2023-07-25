package servlet;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
@WebServlet("/segundo-servlet")
public class SegundoServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        //para la captura utilizamos el req.getparameter
        String email= req.getParameter("email");//primer parametro pero debo recuperarlo e algun lugar en una variable
        String pwd= req.getParameter("pwd");

        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<meta charset='UTF-8'>");
        out.println("<title>Segundo Servlet</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h3>Datos del Formulario</h3>");
        out.println("<h4>Correo Electrónico::"+email+"</h4>");
        out.println("<h4>Contraseña::"+pwd+"</h4>");
        out.println("</body>");
        out.println("</html>");

    }
}
