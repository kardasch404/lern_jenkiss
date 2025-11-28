pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning Repository...'
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                echo 'Installing Node.js...'
                sh '''
                    wget -qO- https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz | tar -xJ
                    export PATH=$PWD/node-v20.11.0-linux-x64/bin:$PATH
                    node --version
                    npm --version
                '''
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh '''
                    export PATH=$PWD/node-v20.11.0-linux-x64/bin:$PATH
                    npm ci
                '''
            }
        }
        
        stage('Lint') {
            steps {
                echo 'Running ESLint...'
                sh '''
                    export PATH=$PWD/node-v20.11.0-linux-x64/bin:$PATH
                    npm run lint
                '''
            }
        }

        stage('Test') {
            steps {
                echo 'Running Tests...'
                sh '''
                    export PATH=$PWD/node-v20.11.0-linux-x64/bin:$PATH
                    npm run test
                '''
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building application...'
                sh '''
                    export PATH=$PWD/node-v20.11.0-linux-x64/bin:$PATH
                    npm run build
                '''
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}