"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, User } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (username === "CarOneTecnicentro" && password === "Contraseña123.") {
            // Guardar sesión simple
            localStorage.setItem("admin_auth", "true");
            // Redirigir al admin
            router.push("/admin");
        } else {
            setError("Credenciales incorrectas. Por favor intente de nuevo.");
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: "url('/images/taller.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className="bg-black/80 backdrop-blur-md border border-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md z-10 relative">
                <div className="flex flex-col items-center mb-8">
                    <div className="relative w-[180px] h-[60px] mb-6">
                        <Image
                            src="/LOGO.png"
                            alt="Logo Car One"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-white">Panel de Administración</h1>
                    <p className="text-gray-400 text-sm mt-2">Ingrese sus credenciales para continuar</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Usuario</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#00FF00] focus:ring-[#00FF00]/20"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#00FF00] focus:ring-[#00FF00]/20"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-[#00FF00] hover:bg-[#00CC00] text-black font-bold py-6 text-lg transition-all duration-200 hover:scale-[1.02]"
                    >
                        Ingresar
                    </Button>
                </form>
            </div>
        </div>
    );
}
