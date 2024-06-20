pipeline {
    agent any

    environment {
        nodejs = 'C:\\Program Files\\nodejs\\node.exe'
        npm = 'C:\\Program Files\\nodejs\\npm.cmd'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat "\"${npm}\" install"
            }
        }
        stage('Build App') {
            steps {
                bat "\"${npm}\" run build"
            }
        }
        stage('Run App') {
            steps {
                bat "serve -s build"
            }
        }
    }
}