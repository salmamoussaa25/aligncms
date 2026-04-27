import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- 1. Import useNavigate
import './SignIn.css';
import { Globe, Users, ShieldCheck, Lock, Mail, Eye, EyeOff, Building2 } from 'lucide-react';

const SignIn = () => {
  const navigate = useNavigate(); // <-- 2. Initialize the hook

  const [email, setEmail] = useState('admin@align.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      console.log('Signing in...', { email, password });
      
      // Simulate network request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // <-- 3. Navigate to dashboard after successful "login"
      navigate('/dashboard'); 
      
    } catch (err) {
      setError(err.message || 'Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      console.log('Redirecting to Google...');
      // If you want Google sign in to also navigate, add it here:
      // navigate('/dashboard');
    } catch (err) {
      setError('Error connecting to Google.');
    }
  };

  return (
    <div className="sign_container">
      <div className="sign_leftcolumn">
        <header className="sign_header">
          <div className="sign_logo">Align CMS</div>
        </header>

        <section className="sign_infosection">
          <h1 className="sign_heading">
            Admin Access –<br /> Align Dashboard
          </h1>
          <p className="sign_subheading">
            Secure backend access for managing website and mobile app content across bilingual platforms.
          </p>

          <ul className="sign_features">
            <li className="sign_featureitem">
              <Globe className="sign_featureicon" />
              <div className="sign_featuretext">
                <span className="sign_featuretitle">Content Management System</span>
                <p className="sign_featuredesc">Full control over website pages and mobile app content</p>
              </div>
            </li>
            <li className="sign_featureitem">
              <Users className="sign_featureicon" />
              <div className="sign_featuretext">
                <span className="sign_featuretitle">Bilingual Platform Control</span>
                <p className="sign_featuredesc">Manage English and Arabic content seamlessly</p>
              </div>
            </li>
            <li className="sign_featureitem">
              <ShieldCheck className="sign_featureicon" />
              <div className="sign_featuretext">
                <span className="sign_featuretitle">Secure Role-Based Access</span>
                <p className="sign_featuredesc">Permission-controlled environment for team collaboration</p>
              </div>
            </li>
          </ul>

          <div className="sign_protectedbox">
            <Lock className="sign_protectedicon" />
            <div className="sign_protectedtext">
              <span className="sign_protectedtitle">Admin Access Protected</span>
              <p className="sign_protecteddesc">
                All authentication is encrypted end-to-end. Access is granted based on verified roles and permissions within the organization.
              </p>
            </div>
          </div>
        </section>

        <footer className="sign_leftfooter">
          <p className="sign_footertext">©️ 2026 Align. Secure content management system.</p>
        </footer>
      </div>

      <div className="sign_rightcolumn">
        <div className="sign_formcard">
          <h2 className="sign_cardheading">Sign In to Dashboard</h2>
          <p className="sign_cardsubheading">Enter your credentials to access the admin panel</p>

          <form className="sign_form" onSubmit={handleSignIn}>
            <div className="sign_inputgroup">
              <label className="sign_label" htmlFor="email">Email Address</label>
              <div className="sign_inputwrapper">
                <Mail className="sign_inputicon sign_inputiconleft" />
                <input
                  type="email"
                  id="email"
                  className="sign_input sign_inputhaslefticon"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@align.com"
                  required
                />
              </div>
            </div>

            <div className="sign_inputgroup">
              <label className="sign_label" htmlFor="password">Password</label>
              <div className="sign_inputwrapper">
                <Lock className="sign_inputicon sign_inputiconleft" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="sign_input sign_inputhaslefticon sign_inputhasrighticon"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="sign_passwordtoggle"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="sign_toggleicon" /> : <Eye className="sign_toggleicon" />}
                </button>
              </div>
            </div>

            {error && <p className="sign_errormessage">{error}</p>}

            <div className="sign_options">
              <label className="sign_checkboxwrapper">
                <input
                  type="checkbox"
                  className="sign_checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="sign_checkboxtext">Remember me</span>
              </label>
              <a href="#" className="sign_forgotlink">Forgot password?</a>
            </div>

            <button type="submit" className="sign_signinbtn" disabled={isLoading}>
              {isLoading ? 'Authenticating...' : 'Sign In to Dashboard'} 
              {!isLoading && <Lock size={18} className="sign_btnicon" />}
            </button>
          </form>

          <div className="sign_divider">
            <span className="sign_dividertext">OR</span>
          </div>

          <button type="button" className="sign_googlebtn" onClick={handleGoogleSignIn}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="sign_googleicon"
            />
            Continue with Google Workspace
          </button>

          <div className="sign_democredentials">
            <h3 className="sign_demotitle">Demo Credentials:</h3>
            <div className="sign_demoitem">
              <span className="sign_demolabel">Email:</span>
              <span className="sign_demovalue">admin@align.com</span>
            </div>
            <div className="sign_demoitem">
              <span className="sign_demolabel">Password:</span>
              <span className="sign_demovalue">password123</span>
            </div>
          </div>
        </div>

        <p className="sign_rightfooter">
          Access requires verified admin or editor role. <a href="#" className="sign_supportlink">Contact support</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;